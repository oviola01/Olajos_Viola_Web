<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SzavakSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("szavaks")->insert([
            'angol' => 'beautiful',
            'magyar' => 'gyönyörű',
            'temaId' => 1,
        ],);

        DB::table("szavaks")->insert([
            'angol' => 'curious',
            'magyar' => 'kíváncsi',
            'temaId' => 1,
        ],);

        DB::table("szavaks")->insert([
            'angol' => 'exhausted',
            'magyar' => 'fáradt',
            'temaId' => 1,
        ],);

        DB::table("szavaks")->insert([
            'angol' => 'table',
            'magyar' => 'asztal',
            'temaId' => 2,
        ],);

        DB::table("szavaks")->insert([
            'angol' => 'chair',
            'magyar' => 'szék',
            'temaId' => 2,
        ],);
    }
}
