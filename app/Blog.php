<?php

namespace App;

use TCG\Voyager\Traits\Resizable;
use Illuminate\Database\Eloquent\Model;


class Blog extends Model
{
    use Resizable;

    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    function latest($column = 'created_at')
    {
        return $this->orderBy($column, 'desc');
    }
}
