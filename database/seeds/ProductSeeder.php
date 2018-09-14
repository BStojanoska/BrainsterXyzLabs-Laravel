<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $faker->addProvider(new Bluemmb\Faker\PicsumPhotosProvider($faker));

        $limit = 10;

        for ($i = 0; $i < $limit; $i++) {
            DB::table('products')->insert([
                'name' => $faker->company,
                'subtitle' => $faker->catchPhrase,
                'photo' => $faker->imageUrl,
                'url' => $faker->imageUrl,
                'description' => $faker->text($maxNbChars = 200),
            ]);
        }
    }
}
