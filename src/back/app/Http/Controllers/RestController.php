<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Proveedores;

class RestController extends Controller
{
    public function addData(Request $request)
    {
        $proveedores = $request->all();

        // TODO: Add info only if access_group_id not exist
        // TODO: Update info only if access_group_id exist
        foreach ($proveedores as $key => $proveedor) {
            Proveedores::updateOrCreate(
                ['access_group_id' => $proveedor['access_group_id']],
                [
                    'access_group_id' => $proveedor['access_group_id'],
                    'access_group_name' => $proveedor['access_group_name'],
                    'basic_product_id' => $proveedor['basic_product_id'],
                    'event_id' => $proveedor['event_id'],
                    'modified' => $proveedor['modified'],
                    'name' => $proveedor['name'],
                    'structure_decode' => $proveedor['structure_decode'],
                    'total_uses' => $proveedor['total_uses'],
                ]
            );
        }

        return response()->json(Proveedores::all());
    }
}
