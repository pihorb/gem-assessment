import { Gem } from '@/components/Gem';
import { useAppContext } from '@/context/appContext';

export default function Home() {
  const { gemText } = useAppContext();
  console.log(gemText, 'aaa');
  return 'hello';
}
