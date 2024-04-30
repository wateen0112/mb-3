import { ref, onMounted, onUnmounted } from 'vue';

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ScreenSizeBreakpoints {
  [key: string]: number;
}

const screenSizeBreakpoints: ScreenSizeBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const useScreen = () => {
  const screenWidth = ref(window.innerWidth);
  const screenSize = ref(getScreenSize(screenWidth.value));

  const handleResize = () => {
    screenWidth.value = window.innerWidth;
    screenSize.value = getScreenSize(screenWidth.value);
  };

  function getScreenSize(width: number): ScreenSize {
    for (const [size, breakpoint] of Object.entries(screenSizeBreakpoints)) {
      if (width < breakpoint) {
        return size as ScreenSize;
      }
    }
    return 'xl';
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return {
    screenWidth,
    screenSize,
  };
};

