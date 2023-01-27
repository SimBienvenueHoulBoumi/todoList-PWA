import { api } from 'boot/axios'

export function getAllLists() {
  return api.get('/lists')
}

export function createList(title) {
  return api.post('/lists', { title })
}

export function getSingleList(id) {
  return api.get(`/lists/${id}`)
}

export function updateList(id, data) {
  return api.put(`/lists/${id}`, data)
}

export function deleteList(id) {
  return api.delete(`/lists/${id}`)
}
