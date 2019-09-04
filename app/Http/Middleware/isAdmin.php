<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;

class isAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (auth()->user()->is_admin) {
            return $next($request);
        }
        return response()->json(["message" => "Don't have permission", Response::HTTP_FORBIDDEN]);
    }
}
