import { supabase } from './supabase';

async function create(resource, data) {
  const { data: createdData, error } = await supabase
    .from(resource)
    .insert(data)
    .select('*');

  if (error) {
    throw error;
  }

  return createdData?.[0];
}

async function read(resource, filter) {
  const { data, error } = filter
    ? await supabase
        .from(resource)
        .select('*')
        .eq(Object.keys(filter)[0], Object.values(filter)[0])
    : await supabase.from(resource).select('*');

  if (error) {
    throw error;
  }

  return data;
}

async function update(resource, data) {
  const { data: updatedData, error } = await supabase
    .from(resource)
    .update(data)
    .eq('id', data.id)
    .select('*');

  if (error) {
    throw error;
  }

  return updatedData?.[0];
}

async function remove(resource, id) {
  const { error } = await supabase.from(resource).delete().eq('id', id);

  if (error) {
    throw error;
  } else {
    return true;
  }
}

export default { create, read, update, remove };
