const API_BASE = 'http://127.0.0.1:8787/api'

function getAuthHeaders() {
  const token = localStorage.getItem('accessToken')

  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
}

export async function registerUser(data) {
  const response = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return response.json()
}

export async function loginUser(data) {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return response.json()
}

export async function getScaffolds() {
  const response = await fetch(`${API_BASE}/scaffolds`, {
    headers: getAuthHeaders(),
  })

  return response.json()
}

export async function createScaffold(data) {
  const response = await fetch(`${API_BASE}/scaffolds`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  })

  return response.json()
}

export async function getScaffoldById(id) {
  const response = await fetch(`${API_BASE}/scaffolds/${id}`, {
    headers: getAuthHeaders(),
  })

  return response.json()
}

export async function updateScaffold(id, data) {
  const response = await fetch(`${API_BASE}/scaffolds/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  })

  return response.json()
}

export async function deleteScaffold(id) {
  const response = await fetch(`${API_BASE}/scaffolds/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  })

  return response.json()
}

export async function getScaffoldMaterials(id) {
  const response = await fetch(`${API_BASE}/scaffolds/${id}/materials`, {
    headers: getAuthHeaders(),
  })

  return response.json()
}

export async function updateScaffoldMaterials(id, materials) {
  const response = await fetch(`${API_BASE}/scaffolds/${id}/materials`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      materials,
    }),
  })

  return response.json()
}
