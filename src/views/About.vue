<template>
    <div>
       <div class="line" v-for="(line, index) in lines">
         <p> {{index}} | 
            <h1 class="text-danger">{{line.type}}</h1>
            <h4 class="text-primary">{{line.body}}</h4>
            <div class="line comment"> heeey </div>
            <div style="border: 1px dashed;" class="mt-2"></div>
         </p>
       </div>
    </div>
</template>

<script>
export default {
    name: "line",

    props: {
        type: {
            type: String,
            required: true,
            default: 'comment'
        },
        body: {
          type: String,
          required: true
        }
    },

    data() {
        return {
            lines: [
            {"type" : "comment","body" : "HelloWorld!"}, 
            {"type" : "comment","body" : "Sexyyy"}, 
            ],
        }
    },

    methods: {
        readNews(newsNum){
            this.$emit('read', newsNum);
        }
    }
}
</script>