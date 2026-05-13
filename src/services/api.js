const API_BASE = 'http://127.0.0.1:8787/api'

async function refreshAccessToken() {
  const refreshToken = localStorage.getItem('refreshToken')
  if (!refreshToken) {
    return null
  }
  const response = await fetch(`${API_BASE}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refreshToken,
    }),
  })

  const data = await response.json()

  if (data.accessToken) {
    localStorage.setItem('accessToken', data.accessToken)
    return data.accessToken
  }

  return null
}
async function authenticatedFetch(url, options = {}) {
  let accessToken = localStorage.getItem('accessToken')
  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (response.status === 401) {
    const newAccessToken = await refreshAccessToken()
    if (!newAccessToken) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user')
      window.location.href = '/login'
      return response
    }

    response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${newAccessToken}`,
      },
    })
  }

  return response
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

export async function logoutUser() {
  const refreshToken = localStorage.getItem('refreshToken')

  if (!refreshToken) {
    return
  }

  await fetch(`${API_BASE}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refreshToken,
    }),
  })
}

export async function getScaffolds() {
  const response = await authenticatedFetch(`${API_BASE}/scaffolds`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}

export async function createScaffold(data) {
  const response = await authenticatedFetch(`${API_BASE}/scaffolds`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return response.json()
}

export async function getScaffoldById(id) {
  const response = await authenticatedFetch(`${API_BASE}/scaffolds/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}

export async function updateScaffold(id, data) {
  const response = await authenticatedFetch(`${API_BASE}/scaffolds/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return response.json()
}

export async function deleteScaffold(id) {
  const response = await authenticatedFetch(`${API_BASE}/scaffolds/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}

export async function getScaffoldMaterials(id) {
  const response = await authenticatedFetch(`${API_BASE}/scaffolds/${id}/materials`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}

export async function updateScaffoldMaterials(id, materials) {
  const response = await authenticatedFetch(`${API_BASE}/scaffolds/${id}/materials`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      materials,
    }),
  })

  return response.json()
}
