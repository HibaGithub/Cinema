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
            $table->unsignedBigInteger('idhoraire');
            $table->unsignedBigInteger('idfilms');
            $table->foreign('idhoraire')->references('id')->on('horair');
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
