function changeAccent(color: string) {
  document.documentElement.style.cssText = '--accent-color: ' + color;
  document.documentElement.style.cssText = '--accent-color-50: ' + color + '50';
  document.documentElement.style.cssText = '--accent-color-40: ' + color + '40';

  // get item with id="gradient-spinner" and replace its classes
  const spinner = document.getElementById('gradient-spinner');
  if (spinner) {
    spinner.className = `absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#141301_0%,${color}_80%,#141301_100%)]`;
  }
}

export { changeAccent };
