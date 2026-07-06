[ Browser ] --------( Request: "Give me user profile" )--------> [ Playwright Interceptor 🛑 ]
                                                                             │
                    ┌────────────────────────────────────────────────────────┴────────────────────────────────────────┐
                    ▼                                                        ▼                                        ▼
         Choice 1: route.abort()                                  Choice 2: route.fulfill()                 Choice 3: route.continue()
                    │                                                        │                                        │
      (Destroys the request instantly)                       (Crafts a completely fake response)         (Lets the request pass to the server)
                    │                                                        │                                        │
                    ▼                                                        ▼                                        ▼
 [ Browser gets: "Network Error!" ]                    [ Browser gets: "Welcome, Mickey Mouse!" ]          [ Request hits the Real Server ]



// abort
1. if the page is image heavy like retail websites, page.route can be used to filter the content