<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use Cumulati\Monolog\LogContext;

class AppTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testLogContextIsSetup()
    {
        $this->assertTrue(true);

        $lc = new LogContext();
        $lc->info('');
    }
}
