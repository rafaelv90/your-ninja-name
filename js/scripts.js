var nameDictionary = {
  'a': 'ka',
  'b': 'zu',
  'c': 'mi',
  'd': 'te',
  'e': 'ku',
  'f': 'lu',
  'g': 'ji',
  'h': 'ri',
  'i': 'ki',
  'j': 'zu',
  'k': 'me',
  'l': 'ta',
  'm': 'rin',
  'n': 'to',
  'o': 'mo',
  'p': 'no',
  'q': 'ke',
  'r': 'shi',
  's': 'ari',
  't': 'chi',
  'u': 'do',
  'v': 'ru',
  'w': 'mei',
  'x': 'na',
  'y': 'fu',
  'z': 'zi'
}

new Vue({
  el: '#app',
  data: {
    ninjaName: '',
    name: ''
  },
  methods: {
    ninjafy: function () {
      this.ninjaName = this.name.split('').map(function(i){ return nameDictionary[i] || '' }).join('')
    }
  }
})
