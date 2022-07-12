<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class AuthControllerTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCanRegisterAndLogin()
    {
        $response = $this->postJson('/api/auth/register', [
            'name' => 'usertest',
            'email' => 'user@test.test',
            'password' => 'secretsecret'
        ])->assertStatus(200);

        $accessToken = $response->json('access_token');
        $this->assertNotNull($accessToken);

        $this->postJson('/api/auth/register', [
            'name' => 'usertest',
            'email' => 'user@test.test',
            'password' => 'secretsecret'
        ])->assertStatus(422);

        $this->postJson('/api/auth/login', [
            'email' => 'user@test.test',
            'password' => 'secretsecret'
        ])->assertStatus(200);
    }
}
