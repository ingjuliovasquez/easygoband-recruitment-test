<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proveedores extends Model
{
    use HasFactory;

    protected $fillable = [
        "access_group_id",
        "access_group_name",
        "basic_product_id",
        "event_id",
        "modified",
        "name",
        "structure_decode",
        "total_uses",
    ];
    public $timestamps = false;
}
