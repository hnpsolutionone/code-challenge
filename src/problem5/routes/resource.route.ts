import { Router } from "express";
import * as ctrl from "../controllers/resource.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  createResourceSchema,
  updateResourceSchema
} from "../schemas/resource.schema";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Resources
 *   description: Resource management API
 */

/**
 * @swagger
 * /resources:
 *   get:
 *     summary: Get list of resources
 *     tags: [Resources]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filter by type
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Filter by status
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of resources
 */
router.get("/", ctrl.listResources);

/**
 * @swagger
 * /resources/{id}:
 *   get:
 *     summary: Get a resource by ID
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Resource ID
 *     responses:
 *       200:
 *         description: Resource found
 *       404:
 *         description: Resource not found
 */
router.get("/:id", ctrl.getResource);

/**
 * @swagger
 * /resources:
 *   post:
 *     summary: Create a new resource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - status
 *             properties:
 *               name:
 *                 type: string
 *                 example: BTC
 *               type:
 *                 type: string
 *                 example: crypto
 *               status:
 *                 type: string
 *                 example: active
 *     responses:
 *       201:
 *         description: Resource created
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createResourceSchema), ctrl.createResource);

/**
 * @swagger
 * /resources/{id}:
 *   put:
 *     summary: Update a resource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Resource ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: ETH
 *               type:
 *                 type: string
 *                 example: crypto
 *               status:
 *                 type: string
 *                 example: inactive
 *     responses:
 *       200:
 *         description: Resource updated
 *       404:
 *         description: Resource not found
 */
router.put("/:id", validate(updateResourceSchema), ctrl.updateResource);

/**
 * @swagger
 * /resources/{id}:
 *   delete:
 *     summary: Delete a resource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Resource ID
 *     responses:
 *       200:
 *         description: Resource deleted
 *       404:
 *         description: Resource not found
 */
router.delete("/:id", ctrl.deleteResource);

export default router;