<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('films', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('image');
            $table->string('titre');
            $table->string('categorie');
            $table->integer('age');
            $table->decimal('duration', 6, 0);
            $table->date('date-edition');
            $table->date('date-diffusion');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('films');
    }
};
