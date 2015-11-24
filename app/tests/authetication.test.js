describe('authenticationTest', function () {

    beforeEach(module('authenticationServiceModule'));


    var credentials = {
        username: "admin@admin",
        password: "admin"
    }

    var authenticationService;
    beforeEach(inject(function (_authenticationService_) {
        authenticationService = _authenticationService_;
    }))
    it('should return false when is not logged', function () {
        // var a = false;

        expect(authenticationService.isLogged()).toBe(false);
    })

    it('should be authenticated after using proper credentials', function () {
        expect(authenticationService.checkAuthentication(credentials)).toBe(true);
    })

    it('should be logged after entering with proper credentials', function () {
        authenticationService.checkAuthentication(credentials);
        expect(authenticationService.isLogged()).toBe(true);
    })

    it('should be not authenticated after using wrong credentials', function () {

        var wrongCredentials = {
            username: "admin@a",
            password: "admin"
        }
        expect(authenticationService.checkAuthentication(wrongCredentials)).toBe(false);
    })
});