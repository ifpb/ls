import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import renderComponent from './utils/render-component'
import { getFSRoute } from './utils/get-fs-route'
import useMenuContext from './utils/menu-context'

import Search from './search'
import StorkSearch from './stork-search'
import GitHubIcon from './github-icon'
import ThemeSwitch from './theme-switch'
import LocaleSwitch from './locale-switch'

export default function Navbar({ config, isRTL, flatDirectories, flatPageDirectories }) {
  const { locale, asPath } = useRouter()
  const activeRoute = getFSRoute(asPath, locale).split('#')[0]
  const { menu, setMenu } = useMenuContext()

  return (
    <nav className="flex items-center bg-white z-20 fixed top-0 left-0 right-0 h-16 border-b border-gray-200 px-6 dark:bg-dark dark:border-gray-900 bg-opacity-[.97] dark:bg-opacity-100">
      <div className="w-full flex items-center mr-2">
        <Link href="/">
          <a className="no-underline text-current inline-flex items-center hover:opacity-75">
            {renderComponent(config.logo, { locale })}
          </a>
        </Link>
      </div>

      {flatPageDirectories
        ? flatPageDirectories.map(page => {
            if (page.hidden) return null

            let href = page.route

            // If it's a directory
            if (page.children) {
              href = page.firstChildRoute
            }

            return (
              <Link href={href} key={page.route}>
                <a
                  className={cn(
                    'no-underline whitespace-nowrap mr-4 hidden md:inline-block',
                    page.route === activeRoute ||
                      activeRoute.startsWith(page.route + '/')
                      ? 'text-current'
                      : 'text-gray-500'
                  )}
                >
                  {page.title}
                </a>
              </Link>
            )
          })
        : null}

      <div className="flex-1">
        <div className="hidden md:inline-block mr-2">
          {config.customSearch ||
            (config.search ? (
              config.unstable_stork ? (
                <StorkSearch />
              ) : (
                <Search directories={flatDirectories} />
              )
            ) : null)}
        </div>
      </div>

      {config.darkMode ? <ThemeSwitch /> : null}

      {config.i18n ? (
        <LocaleSwitch options={config.i18n} isRTL={isRTL} />
      ) : null}

      {config.github ? (
        <a className="text-current p-2" href={config.github} target="_blank">
          <GitHubIcon height={24} />
        </a>
      ) : null}

      <button className="block md:hidden p-2" onClick={() => setMenu(!menu)}>
        <svg
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div className="-mr-2" />
    </nav>
  )
}
