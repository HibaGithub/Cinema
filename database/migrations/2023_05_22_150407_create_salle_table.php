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
        Schema::create('salle', function (Blueprint $table) {
            $table->id('idsalle');
            $table->string('nom');
            $table->bigInteger('idhorair')->unsigned();
            $table->bigInteger('idfilms')->unsigned();
            $table->foreign('idhoraire')->references('id')->on('horaire');
            $table->foreign('idfilms')->references('id')->on('films');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('salle');
    }
};
