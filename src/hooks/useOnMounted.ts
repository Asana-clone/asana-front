import { useEffect } from 'react';

const useOnMounted = (effect: any) => {
	return useEffect(effect, []);
};

export default useOnMounted;
