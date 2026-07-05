export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const resolveImageUrl = (image) => {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  return `${API_BASE_URL}/images/${image}`;
};

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || `Request failed with status ${res.status}`);
  }
  return data;
}

export const api = {
  get: (path, token) =>
    request(path, { headers: token ? { Authorization: `Bearer ${token}` } : {} }),
  post: (path, body, token) =>
    request(path, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: JSON.stringify(body),
    }),
};