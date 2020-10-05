const express = require('express');
const router = express.Router();
const { PostMessage } = require('../models/postMessage');

const create = async (req, res) => {
    try {
        const newPostMessage = new PostMessage({
            title: req.body.title,
            message: req.body.message
        })
        const result = await newPostMessage.save();
        return res.status(200).json([result])
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const get = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        return res.status(200).json(postMessage)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getOne = async (req, res) => {
    try {
        const postMessage = await PostMessage.findById(req.params.id)
        if (!postMessage) {
            return res.status(404).send({error: 'Not found'})
        }
        return res.status(200).json(postMessage)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteOne = async (req, res) => {
    try {
        const postMessage = await PostMessage.findById(req.params.id)
        if (!postMessage) {
            return res.status(404).send({error: 'Not found'})
        }
        postMessage.delete()
        return res.status(200).send({message: 'Post Message has been deleted'})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const postMessage = await PostMessage.findById(req.params.id)
        if (!postMessage) {
            return res.status(404).send({error: 'Not found'})
        }
        const newPostMessage = await PostMessage.findByIdAndUpdate(postMessage._id, {
            title: req.body.title,
            message: req.body.message
        }, {new: true})
        return res.status(200).send(newPostMessage)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    deleteOne,
    getOne,
    get,
    create,
    update
}