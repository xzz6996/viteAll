import { defineComponent } from 'vue'
export default defineComponent({
    name: 'firstExamplace',
    props: {
        Title: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const tachMe = () => {
            console.log(666)
        }
        return () => <div class="firstExamplace">{props.Title}<div onClick={tachMe}>onclick me</div></div>
    }
})

