import { NextResponse } from 'next/server'

export default function middleware(request) {
    let cookies = request.cookies.get('user_login')?.value
    if(cookies == undefined){
        cookies = ''
    }
    
    if(cookies!= '' && request.nextUrl.pathname.startsWith('/login-register')){
      return NextResponse.redirect(new URL('/my-dashboard', request.url))
    }
    
    if(cookies == '' && request.nextUrl.pathname.startsWith('/my-dashboard')){
      return NextResponse.redirect(new URL('login-register', request.url))
    }

    if(cookies == '' && request.nextUrl.pathname.startsWith('/checkout')){
      return NextResponse.redirect(new URL('/login-register', request.url))
    }
  return (
    NextResponse.next()
  )
}
