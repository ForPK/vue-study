const app = Vue.createApp({
    data() {
      return {
        
      };
    },
    methods: {
      
    },
  });

  app.component('friend-contact', {
    template: `
      <li v-for="friend in friends" :key="friend.id">
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">
          {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailsAreVisible">
          <li><strong>Phone:</strong> {{ friend.phone }}</li>
          <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
      </li>
    `,
    data() {
      return { 
        detailsAreVisible: false,
        friends: [
          {
            id: 'manuel',
            name: 'Manuel Lorenz',
            phone: '000 0000 0000',
            email: 'aaa@aaa',
          },
          // {
          //   id: 'julie',
          //   name: 'Julie Jones',
          //   phone: '111 1111 1111',
          //   email: 'bbb@bbb',
          // },
        ],
       };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    }
  });
  
  app.mount('#app');