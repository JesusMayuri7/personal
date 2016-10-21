<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    /**
     * @var \Tymon\JWTAuth\JWTAuth
     */
    protected $jwt;
    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }
    public function postLogin(Request $request)
    {
       /*   $user = new \App\User;
            $user->name='fer';
            $user->email='thefer@gmail.com';
            $user->password = Hash::make('sonic');
            $user->save();
*/

            $credentials = $request->json()->all();
            try {
                if (! $token = $this->jwt->attempt($credentials)) {
                    return response()->json(['error' => 'Usuario o Contraseña invalida'], 401);
                }
            } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
                return response()->json(['token_expired'], 500);
            } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
                return response()->json(['token_invalid'], 500);
            } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
                return response()->json(['token_absent' => $e->getMessage()], 500);
            }
            return response()->json($token);
    }

    public function seguro()
    {
        //$user = $this->jwt->parseToken()->authenticate();
        $user = $this->jwt->getUserToken();
        return response()->json([
            'message' => $user,
        ]);
    }
}