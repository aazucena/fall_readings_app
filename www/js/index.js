var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'Fall Readings App',
    // Add default routes
    routes: [
    //   {
    //     path: '/about/',
    //     url: 'about.html',
    //   },
    ],
    on: {
        init: function () {
            console.log('App initialized');
        },
        pageInit: function () {
            console.log('Page initialized');
        },
    }
    // ... other parameters
})
window.onload = function() {
    var mainView = app.views.create('.view-main')
}
