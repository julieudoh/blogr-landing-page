<template>
    <div  class="relative">
        <input name="password" id="password" :type="passwordIsVisible ? 'text': 'password'" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="w-full py-2 px-4 border border-gray-500 p-2 focus:outline-0"/>
        <button type="button"
      @click="toggleVisibility"
      class="absolute inset-y-0 right-0 flex items-center px-3">
            <font-awesome-icon :icon="passwordIsVisible ? 'eye-slash' : 'eye'" />
        </button>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faEyeSlash);
export default{
    props: {
        modelValue: String 
     },
    emits: ['update:modelValue'], 
    components: { FontAwesomeIcon },
    data(){
        return {
            passwordIsVisible: false
        }
    },
    methods: {
        toggleVisibility(){
            this.passwordIsVisible = !this.passwordIsVisible;
        }
    }
}
</script>