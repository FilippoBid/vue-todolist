const { createApp } = Vue;

createApp({
  
  data () {
  
    return {
        instrumentList: [
            {instrument:"Voce",
             recorded:false},
            {instrument:"Guitar",
             recorded:false},
            {instrument:"Bass",
             recorded:false},
            {instrument:"synth",
             recorded:false},
            {instrument:"Drum",
             recorded:false},
            {instrument:"Second Voice",
             recorded:false},
            {instrument:"Solo Guitar",
             recorded:false},
           
        ]
    };
  },
  methods:{

  }
}).mount("#app")