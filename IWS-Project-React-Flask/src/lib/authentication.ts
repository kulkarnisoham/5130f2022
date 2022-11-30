export function getUserId() {
  const token = localStorage.getItem("token");
  if (!token) return false
  const parseToken = JSON.parse(window.atob(token.split('.')[1]))
  return parseToken.sub
};

export function isProfessor(compareId: any) {
    if (!compareId) return false
    return getUserId() === compareId;
}
