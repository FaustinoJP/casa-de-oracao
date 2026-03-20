export type AppRole = 'ADMINISTRADOR' | 'EDITOR' | 'PUBLICADOR';

export function canManageOfficials(role: string) {
  return role === 'ADMINISTRADOR';
}

export function canEdit(role: string) {
  return role === 'ADMINISTRADOR' || role === 'EDITOR';
}

export function canPublish(role: string) {
  return role === 'ADMINISTRADOR' || role === 'EDITOR' || role === 'PUBLICADOR';
}
