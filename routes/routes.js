module.exports = function(server) {
    //About route
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (request, h) {
    
            var data = {
                message: 'Vuvuzela  Calculator Service'
            };
    
            return data;
        }
    });

    //Add route
    server.route({
        method: 'GET',
        path: '/calculator/add/{a}/{b}',
        handler: function (request, h) {

            const a = parseInt(request.params.a);
            const b = parseInt(request.params.b);

            var data = {
                result: a + b
            };
    
            return data;
        }
    });

    //Subtract route
    server.route({
        method: 'GET',
        path: '/calculator/sub/{a}/{b}',
        handler: function (request, h) {

            const a = parseInt(request.params.a);
            const b = parseInt(request.params.b);

            var data = {
                result: a - b
            };
    
            return data;
        }
    });

    //Multiply route
    server.route({
        method: 'GET',
        path: '/calculator/multi/{a}/{b}',
        handler: function (request, h) {

            const a = parseInt(request.params.a);
            const b = parseInt(request.params.b);

            var data = {
                result: a * b
            };
    
            return data;
        }
    });

    //Division route
    server.route({
        method: 'GET',
        path: '/calculator/div/{a}/{b}',
        handler: function (request, h) {

            const a = parseInt(request.params.a);
            const b = parseInt(request.params.b);

            var data = {
                result: a / b
            };
    
            return data;
        }
    });
}