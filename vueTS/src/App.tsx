import { defineComponent } from 'vue'
import FirstExamplace from './components/firstExamplace'
import LogoImg from './assets/logo.png'
import './index.scss'
export default defineComponent({
    name: 'App',
    setup() {
        return () => <div>
            <img alt="Vue logo" src={LogoImg} />
            <FirstExamplace Title="this is APP.tsx"  />
        </div>
    }
})