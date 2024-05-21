<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TemaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("temas")->insert([
            'temanev' => 'jelzők',
        ],);

        DB::table("temas")->insert([
            'temanev' => 'főnevek',
        ],);
    }
}
