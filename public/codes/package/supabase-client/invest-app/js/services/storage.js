import { createClient } from '@supabase/supabase-js';

const API_KEY = import.meta.env.VITE_APP_SUPABASE_KEY;
const API_URL = import.meta.env.VITE_APP_SUPABASE_URL;

const supabase = createClient(API_URL, API_KEY);

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

async function read(resource, id) {
  const { data, error } = id
    ? await supabase.from(resource).select('*').eq('id', id)
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
