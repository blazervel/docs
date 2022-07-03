<?php

namespace App\Features\Pages;

use Illuminate\Support\Collection;
use Lorisleiva\Actions\Concerns\AsAction;

class All
{
  use AsAction;

  public function handle(): Collection
  {
    $pages = [];

    $pageSlugs = [
      'install',
      'start',
      'actions'
    ];

    foreach ($pageSlugs as $slug) :
      $pages[] = [
        'slug' => $slug,
        'title' => __("pages.{$slug}"),
        'content' => strip_tags(view("pages.{$slug}")->render())
      ];
    endforeach;

    return collect($pages);
  }
}