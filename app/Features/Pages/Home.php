<?php

use Inertia\Inertia;
use Illuminate\Routing\Router;
use Blazervel\Feature\Action;

return new class extends Action
{
  // static function routes(Router $router)
  // {
  //   $router->get('/', App\Features\Pages\Home::class);
  // }

  public function handle()
  {
    return Inertia::render('Home');
  }
};