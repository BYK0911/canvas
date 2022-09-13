import Layer from '@/modules/canvas/layer';
import { reactive } from 'vue'

const setting = reactive<{
  mode: string;
  backgroundColor: string;
  color: string;
  painter: string;
  painterSize: number;
  his: Layer[];
  index: number;
  colorUsed: string[];
  backgroundColorUsed: string[];
}>({
  mode: 'default',
  backgroundColor: '#f0f0f0',
  color: '#000',
  painter: 'Pen',
  painterSize: 10,
  his: [],
  index: -1,
  colorUsed: ['#000000', '#ff0000', '#ffffff'],
  backgroundColorUsed: ['#000000', '#ff0000', '#ffffff'],
})

export default setting