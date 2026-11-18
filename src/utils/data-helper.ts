// tao ten ko bi trung, vd: tag-ngocvo-1731812345678
// note cua tui: web xai chung ca lop nen phai them ten + thoi gian
export function randomName(prefix: string) {
  return prefix + '-ngocvo-' + Date.now();
}
