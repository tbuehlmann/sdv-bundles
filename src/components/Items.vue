<template>
  <div>
    <select v-model="filters.season" v-on:change="updateQuery">
      <option v-for="season in seasonsWithAllSeasonsSeason" v-bind:key="season.id" v-bind:value="season.id">
        {{ season.name }}
      </option>
    </select>

    <select v-model="filters.skill" v-on:change="updateQuery">
      <option v-for="skill in skillsWithAllSkillsSkill" v-bind:key="skill.id" v-bind:value="skill.id">
        {{ skill.name }}
      </option>
    </select>

    <input v-model="filters.name" v-on:change="updateQuery" placeholder="Search">

    <ul>
      <li v-for="item in filteredItems" v-bind:key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Items',
    data: function() {
      return {
        filters: this._filtersFromObject(this.$route.query)
      };
    },
    methods: {
      updateQuery: function() {
        const query = {}

        if (this.filters.season && this.filters.season !== 'all-seasons')
          query['season'] = this.filters.season;

        if (this.filters.skill && this.filters.skill !== 'all-skills')
          query['skill'] = this.filters.skill;

        if (this.filters.name && this.filters.name !== '')
          query['name'] = this.filters.name;

        this.$router.push({name: 'items', query: query});
      },
      _filtersFromObject: function(object) {
        return {
          season: object['season'] || 'all-seasons',
          skill: object['skill'] || 'all-skills',
          name: object['name'] || ''
        };
      }
    },
    computed: {
      filteredItems: function() {
        return this.$store.getters.filteredItems(this.filters);
      },
      seasonsWithAllSeasonsSeason: function() {
        const allSeasonsSeason = {id: 'all-seasons', name: 'All Seasons'};
        return [allSeasonsSeason].concat(this.$store.state.seasons);
      },
      skillsWithAllSkillsSkill: function() {
        const allSkillsSkill = {id: 'all-skills', name: 'All Skills'};
        return [allSkillsSkill].concat(this.$store.state.skills);
      }
    },
    beforeRouteUpdate: function(to, from, next) {
      this.filters = this._filtersFromObject(to.query);
      next();
    }
  };
</script>
