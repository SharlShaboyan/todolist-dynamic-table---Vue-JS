import { createStore } from "vuex";
import listModule from '@/store/modules/list';

export default createStore({
    modules : { listModule }
})