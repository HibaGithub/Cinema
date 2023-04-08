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
       
            Schema::create('gallry_films', function (Blueprint $table) {
                $table->id()->autoIncrement();
                $table->string('image')->nullable();
                $table->string('description');
                $table->bigInteger('idfilms')->unsigned();
                 $table-> foreign('idfilms')->references('id')->on('films')->onDelete('cascade');
            });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gallry_films');
    }
};
