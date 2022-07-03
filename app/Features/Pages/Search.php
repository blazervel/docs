<?php

namespace App\Features\Pages;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Lorisleiva\Actions\Concerns\AsAction;

class Search
{
  use AsAction;

  public function handle(string $term = null): Collection
  {
    if ($term === null) :
      return collect([]);
    endif;

    return (
      All::run()->filter(fn ($p) => (
        Str::contains($p['title'],   $term, true) || 
        Str::contains($p['content'], $term, true)
      )) ?: collect([])
    );
  }
}