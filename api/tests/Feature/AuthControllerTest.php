<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCanRegisterUser()
    {
        $response = $this->postJson('/api/auth/register', [
            'email' => 'user@test.test',
            'password' => 'secret'
        ]);

        $response->assertStatus(200);
    }
}
