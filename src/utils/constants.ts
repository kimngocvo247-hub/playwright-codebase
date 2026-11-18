export const AUTH_FILE = '.auth/admin.json';

export const URLS = {
  login: '/wp-login.php',
  dashboard: '/wp-admin/',
  tag: '/wp-admin/edit-tags.php?taxonomy=post_tag',
  category: '/wp-admin/edit-tags.php?taxonomy=category',
};

// lay user, pass trong file .env
export function getAccount() {
  return {
    username: process.env.ADMIN_USERNAME as string,
    password: process.env.ADMIN_PASSWORD as string,
  };
}
