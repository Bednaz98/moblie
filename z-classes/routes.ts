

export enum RouteType{
    Login,
    Logout,
    Users,
    Post,
    Comments,
    Follow,
    Default
}

export default function getRoute(route:RouteType, dev= true):string{
    const hostURL = "http://localhost"
    const port = 5555

    function getRoute(route:RouteType){
        switch(route){
            case RouteType.Login:       return "/login"
            case RouteType.Logout:      return "/logout"
            case RouteType.Users:       return "/user"
            case RouteType.Comments:    return "/comment"
            case RouteType.Post:        return "/post"
            case RouteType.Follow:      return "/user/follow"
            default:                    return "/"
        }
    }
    if(dev) return `${hostURL}:${port}${getRoute(route)}`
    else return `${hostURL}:${port}${getRoute(route)}`
}