<?php

namespace App\Http\Controllers\Admin;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return void
     */
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $users = User::where('email', '<>', config('app.admin'));

        if (!empty($keyword)) {
            $users = $users->where(function ($query) use ($keyword) {
                $query->where('name', 'LIKE', "%$keyword%")
                    ->orWhere('email', 'LIKE', "%$keyword%");
            });
        }
        $users = $users->latest()->paginate(User::PerPage);
        return response()->json($users, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return void
     */
    public function store(Request $request)
    {
        $rules = [
            'name' => 'required',
            'password' => 'required',
            'email' => 'required|string|max:255|email|unique:users',
        ];
        $customMessages = [
            'name.required' => 'Vui lòng nhập họ và tên',
            'email.unique' => 'Địa chỉ email đã tồn tại',
            'password.required' => 'Vui lòng nhập mật khẩu',
            'email.required' => 'Vui lòng nhập địa chỉ email',
        ];
        $this->validate($request, $rules, $customMessages);

        $data = $request->except('password');
        $data['password'] = bcrypt($request->password);
        $user = User::create($data);

        return response()->json($user, Response::HTTP_CREATED);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request request
     * @param  User     $user    user
     *
     * @return void
     */
    public function update(Request $request, User $user)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|string|max:255|email|unique:users,email,' . $user->id,
        ];
        $customMessages = [
            'name.required' => 'Vui lòng nhập họ và tên',
            'email.unique' => 'Địa chỉ email đã tồn tại',
            'email.required' => 'Vui lòng nhập địa chỉ email',
        ];
        $this->validate($request, $rules, $customMessages);

        $data = $request->except('password');
        if ($request->has('password')) {
            $data['password'] = bcrypt($request->password);
        }

        $user->update($data);

        return response()->json($user, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  User $user user
     *
     * @return void
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(Response::HTTP_NO_CONTENT);
    }
}
