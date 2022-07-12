<?php
namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class AutomatedRouter
{
    public static $automatedModels = [];

    public static function setAutomatedModels(array $automatedModels)
    {
        self::$automatedModels = $automatedModels;
    }

    public static function registerRoutes()
    {
        foreach (self::$automatedModels as $modelName => $resourceName) {
            $model = resolve($modelName);

            $validationRules = $model->automatedRoutes ?? null;
            if (!$validationRules) {
                continue;
            }

            $baseUrl = sprintf('/%s', $resourceName);

            Route::get($baseUrl . '/{id}', function (string $id) use ($model) {
                return $model->find($id);
            });

            Route::delete($baseUrl . '/{id}', function (string $id) use ($model) {
                return $model->find($id)->delete();
            });

            Route::post($baseUrl, function (Request $request) use ($model, $validationRules) {
                $request->validate($validationRules);

                return new $model($request->all());
            });
        }

        self::$automatedModels = [];
    }
}
