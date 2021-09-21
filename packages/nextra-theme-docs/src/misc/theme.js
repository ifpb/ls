import { MDXProvider } from '@mdx-js/react';
import Slugger from 'github-slugger';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import innerText from 'react-innertext';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import 'intersection-observer';

import { useActiveAnchorSet } from './active-anchor';

const ob = {};
const obCallback = {};
const createOrGetObserver = (rootMargin) => {
  // Only create 1 instance for performance reasons
  if (!ob[rootMargin]) {
    obCallback[rootMargin] = [];
    ob[rootMargin] = new IntersectionObserver(
      (e) => {
        obCallback[rootMargin].forEach((cb) => cb(e));
      },
      {
        rootMargin,
        threshold: [0, 1],
      }
    );
  }
  return ob[rootMargin];
};

function useIntersect(margin, ref, cb) {
  useEffect(() => {
    const callback = (entries) => {
      let e;
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].target === ref.current) {
          e = entries[i];
          break;
        }
      }
      if (e) cb(e);
    };

    const observer = createOrGetObserver(margin);
    obCallback[margin].push(callback);
    if (ref.current) observer.observe(ref.current);

    return () => {
      const idx = obCallback[margin].indexOf(callback);
      if (idx >= 0) obCallback[margin].splice(idx, 1);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
}

// Anchor links
const HeaderLink = ({
  tag: Tag,
  children,
  slugger,
  withObserver = true,
  ...props
}) => {
  const setActiveAnchor = useActiveAnchorSet();
  const obRef = useRef();

  const slug = slugger.slug(innerText(children) || '');
  const anchor = <span className="subheading-anchor" id={slug} ref={obRef} />;

  // We are pretty sure that this header link component will not be rerendered
  // separately, so we attach a mutable index property to slugger.
  const index = slugger.index++;

  useIntersect('0px 0px -50%', obRef, (e) => {
    const aboveHalfViewport =
      e.boundingClientRect.y + e.boundingClientRect.height <=
      e.rootBounds.y + e.rootBounds.height;
    const insideHalfViewport = e.intersectionRatio > 0;

    setActiveAnchor((f) => {
      const ret = {
        ...f,
        [slug]: {
          index,
          aboveHalfViewport,
          insideHalfViewport,
        },
      };

      let activeSlug;
      let smallestIndexInViewport = Infinity;
      let largestIndexAboveViewport = -1;
      for (let s in f) {
        ret[s].isActive = false;
        if (
          ret[s].insideHalfViewport &&
          ret[s].index < smallestIndexInViewport
        ) {
          smallestIndexInViewport = ret[s].index;
          activeSlug = s;
        }
        if (
          smallestIndexInViewport === Infinity &&
          ret[s].aboveHalfViewport &&
          ret[s].index > largestIndexAboveViewport
        ) {
          largestIndexAboveViewport = ret[s].index;
          activeSlug = s;
        }
      }

      if (ret[activeSlug]) ret[activeSlug].isActive = true;
      return ret;
    });
  });

  return (
    <Tag {...props}>
      {anchor}
      <a href={'#' + slug} className="text-current no-underline no-outline">
        {children}
        <span className="anchor-icon" aria-hidden>
          #
        </span>
      </a>
    </Tag>
  );
};

const H2 =
  ({ slugger }) =>
  ({ children, ...props }) => {
    return (
      <HeaderLink tag="h2" slugger={slugger} {...props}>
        {children}
      </HeaderLink>
    );
  };

const H3 =
  ({ slugger }) =>
  ({ children, ...props }) => {
    return (
      <HeaderLink tag="h3" slugger={slugger} {...props}>
        {children}
      </HeaderLink>
    );
  };

const H4 =
  ({ slugger }) =>
  ({ children, ...props }) => {
    return (
      <HeaderLink tag="h4" slugger={slugger} {...props}>
        {children}
      </HeaderLink>
    );
  };

const H5 =
  ({ slugger }) =>
  ({ children, ...props }) => {
    return (
      <HeaderLink tag="h5" slugger={slugger} {...props}>
        {children}
      </HeaderLink>
    );
  };

const H6 =
  ({ slugger }) =>
  ({ children, ...props }) => {
    return (
      <HeaderLink tag="h6" slugger={slugger} {...props}>
        {children}
      </HeaderLink>
    );
  };

const A = ({ children, ...props }) => {
  const isExternal = props.href && props.href.startsWith('https://');
  if (isExternal) {
    return (
      <a target="_blank" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={props.href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

const Code = ({ children, className, ...props }) => {
  if (!className) return <code {...props}>{children}</code>;

  // https://mdxjs.com/guides/syntax-highlighting#all-together
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
};

const Table = ({ children }) => {
  return (
    <div className="table-container">
      <table>{children}</table>
    </div>
  );
};

const getComponents = (args) => ({
  h2: H2(args),
  h3: H3(args),
  h4: H4(args),
  h5: H5(args),
  h6: H6(args),
  a: A,
  code: Code,
  table: Table,
});

export default ({ children }) => {
  const slugger = new Slugger();
  slugger.index = 0;
  return (
    <MDXProvider components={getComponents({ slugger })}>
      {children}
    </MDXProvider>
  );
};
